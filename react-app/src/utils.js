export default function catConverter (name) {
    let id;
    (name = 'basketball') ? id = 1 : (name = 'football') ? id = 2 : id = null;
    return id
}

