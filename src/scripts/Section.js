// clase para implementar con el resto de las funcionalidades

export default class Section{

    constructor({items, renderer}, containerSelector) {

        this._items = items
        this._renderer = renderer
        this._container = document.querySelector(containerSelector)

    }

    clear() {
        this._container.innerHTML = ""
    }

    renderer() {
        // this works to render all the items in the section
        this._items.forEach(item => {
            this._renderer(item)
        })
    }

    addItem(item, prepend = false) {
        if (prepend) {
            this._container.prepend(item)
        } else {
            this._container.append(item)
        }
    }

}