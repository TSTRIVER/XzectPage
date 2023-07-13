export const fetcher1 = async() => {
    let res = await fetch("http://localhost:3000/api/service",{ next: {revalidate: 3600}});
    let data = res.json();
    return data;
}

export const fetcher2 = async() => {
    let res = await fetch("http://localhost:3000/api/languages",{next: {revalidate: 3600}});
    let data = res.json();
    return data;
}

export const fetchCategory = async() => {
    let res = await fetch("http://localhost:3000/api/categories",{next: {revalidate: 3600}});
    let data = res.json();
    return data;
}