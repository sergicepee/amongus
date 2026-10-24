import { useEffect, useRef } from 'react';
import L from 'leaflet';

export default function MapView({center,polygon,draft,drawMode,location,tasks,onMapTap,onTileError,onTileLoad,onViewportChange}){
 const root=useRef(null),mapRef=useRef(null),layers=useRef(null),latest=useRef(null),lastPolygon=useRef("");
 latest.current={onMapTap,onTileError,onTileLoad,onViewportChange};
 useEffect(()=>{
  const map=L.map(root.current,{zoomControl:false,scrollWheelZoom:true,preferCanvas:true,keyboard:true}).setView(center,15);
  mapRef.current=map;
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map).on('tileload',()=>latest.current?.onTileLoad?.()).on('tileerror',()=>latest.current?.onTileError?.());
  L.control.zoom({position:'bottomright'}).addTo(map);L.control.scale({position:'bottomright',imperial:false}).addTo(map);
  map.on('click',e=>latest.current?.onMapTap?.(e.latlng));map.on('moveend',()=>{const c=map.getCenter();latest.current?.onViewportChange?.([c.lat,c.lng])});
  mapRef.current.invalidateSize();
  const resize=new ResizeObserver(()=>map.invalidateSize());resize.observe(root.current);
  return()=>{resize.disconnect();map.remove();mapRef.current=null};
 },[]);
 useEffect(()=>{if(!mapRef.current||!center)return;const old=mapRef.current.getCenter();if(Math.abs(old.lat-center[0])>0.001||Math.abs(old.lng-center[1])>0.001)mapRef.current.flyTo(center,Math.max(mapRef.current.getZoom(),15),{duration:.75})},[center]);
 useEffect(()=>{
  const map=mapRef.current;if(!map)return;if(layers.current)map.removeLayer(layers.current);const group=L.featureGroup();
  if(polygon?.length>=3){const zone=L.polygon(polygon,{color:'#436d48',weight:3,opacity:.95,fillColor:'#a7d589',fillOpacity:.17,lineJoin:'round'}).addTo(group);const signature=JSON.stringify(polygon);if(signature!==lastPolygon.current){map.fitBounds(zone.getBounds(),{padding:[42,42],maxZoom:17});lastPolygon.current=signature}}
  else if(draft?.length>0){draft.forEach((p,i)=>L.circleMarker(p,{radius:5,color:'#fff',weight:2,fillColor:'#436d48',fillOpacity:1}).bindTooltip(String(i+1),{permanent:true,direction:'top',className:'map-vertex-label'}).addTo(group));if(draft.length>1)L.polyline(draft,{color:'#436d48',weight:3,dashArray:'5 6'}).addTo(group)}
  tasks?.forEach((task,i)=>{const icon=L.divIcon({className:'task-pin-shell',html:`<span class="task-pin ${task.done?'completed':''}">${task.done?'✓':String(i+1).padStart(2,'0')}</span>`,iconSize:[36,40],iconAnchor:[18,37]});L.marker([task.lat,task.lng],{icon}).bindTooltip(task.name,{direction:'top',offset:[0,-34]}).addTo(group)});
  if(location){L.circle([location.lat,location.lng],{radius:Math.max(8,location.accuracy||8),color:'#2387a8',weight:1,fillColor:'#71c9dc',fillOpacity:.13}).addTo(group);const icon=L.divIcon({className:'player-pin-shell',html:'<span class="player-pin"><i></i></span>',iconSize:[26,26],iconAnchor:[13,13]});L.marker([location.lat,location.lng],{icon,zIndexOffset:1000}).bindTooltip(location.simulated?'Posición de prueba':'Tu posición',{direction:'top',offset:[0,-12]}).addTo(group)}
  group.addTo(map);layers.current=group;
 },[polygon,draft,drawMode,location,tasks]);
 useEffect(()=>{if(!mapRef.current)return;root.current?.classList.toggle('is-drawing',drawMode)},[drawMode]);
 return <div className="map-canvas" ref={root} aria-label="Mapa interactivo"/>;
}

