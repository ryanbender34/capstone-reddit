export default function catConverter (id) {
    let category;
    if (id == 1) {
        category = 'basketball'
    } else if (id == 2) {
        category = 'football' 
    } 
    return category;
}