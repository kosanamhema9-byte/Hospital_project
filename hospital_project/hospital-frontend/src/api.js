const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';
export async function fetchJSON(path, opts){
  const res = await fetch(API+path, opts);
  if(!res.ok) throw new Error(await res.text());
  return res.json();
}
