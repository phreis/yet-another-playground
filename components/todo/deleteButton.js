import { Component } from "../../component";


class DeleteButton extends Component {

  constructor() {
    super();
    this.caption = '';
  }

  html() {
    return `
<button class='delete-button'>X</button>
    `;
  }

  run() {
    const deleteButton = this.componentHTML.querySelector('.delete-button')
    deleteButton.addEventListener('click', (event) => {
      const itemToBeDeleted = deleteButton.closest('li');
      itemToBeDeleted?.remove();
    })
  }

}

export { DeleteButton }
