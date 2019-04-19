module.exports = {
    getInventory(req, res){
        const db = req.app.get("db")
        db.get_inventory().then(allItems => {
            res.status(200).send(allItems)
        }).catch(err => console.log("There was an error in getInventory", err))
    },
    create(req, res){
        const db = req.app.get("db")
        const {name, price, image_url} = req.body
        db.create_product([name, price, image_url]).then(createdItem => {
            res.status(200).send(createdItem)
        }).catch(err => console.log("There was an error in create", err))
    },
    delete(req, res){
        const db = req.app.get("db")
        const {id} = req.params
        db.delete_product([id]).then(items => {
            res.status(200).send(items)
        }).catch(err => console.log("There was an error in delete", err))
    },
    update(req, res){
        const db = req.app.get("db")
        const {id} = req.params
        const {name, price, image_url} = req.body
        db.update_product([id, name, price, image_url]).then(updatedProduct =>{
            res.status(200).send(updatedProduct)
        }).catch(err => console.log("There was an error in update", err))
    }
}