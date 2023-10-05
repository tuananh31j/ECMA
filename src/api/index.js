import instance from "./config";

const getAll = (link) => {
    const url = `/${link}`;
    return instance.get(url);
}

const get = (link, id) => {
    const url = `/${link}/${id}`;
    return instance.get(url);
}

const add = (link, data) => {
    const url = `/${link}`;
    return instance.post(url, data);
}

const remove = (link, id) => {
    const url = `/${link}/${id}`;
    return instance.delete(url);
}

const update = (link, data) => {
    const url = `/${link}/${data.id}`;
    return instance.put(url, data);
}

export { getAll, get, add, remove, update };