// clase para implementar con el resto de las funcionalidades

export default class Section{

    constructor({items, renderer}, containerSelector) {

        this._items = items
        this._renderer = renderer
        this._container = document.querySelector(containerSelector)

    }

    renderer() {
        // this works to render all the items in the section
        this._items.forEach(item => {
            this._renderer(item, this._container)
        })
    }

    addItem(item) {
        this._items.push(item)
    }

}