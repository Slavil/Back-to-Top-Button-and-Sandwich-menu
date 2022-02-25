import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
            <h1>Welcome to my Webpage :)</h1>
            <p>
                This webpage represents my first attempt to make a "Back to top" button and a "Sandwich menu" navigation bar for mobile devices.
            </p>
            <p>
                Hope you like my page and sorry for the poor CSS, but i thought it would be better to have the functionalities.
            </p>
            <p>
                Now i will place some random content so that you can see the back to top button here. It is functional on all views.
            </p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis non neque eligendi commodi, quisquam veniam, voluptates alias voluptatibus, pariatur a culpa sed vel omnis obcaecati dicta excepturi magni earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis non neque eligendi commodi, quisquam veniam, voluptates alias voluptatibus, pariatur a culpa sed vel omnis obcaecati dicta excepturi magni earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis non neque eligendi commodi, quisquam veniam, voluptates alias voluptatibus, pariatur a culpa sed vel omnis obcaecati dicta excepturi magni earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis non neque eligendi commodi, quisquam veniam, voluptates alias voluptatibus, pariatur a culpa sed vel omnis obcaecati dicta excepturi magni earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis non neque eligendi commodi, quisquam veniam, voluptates alias voluptatibus, pariatur a culpa sed vel omnis obcaecati dicta excepturi magni earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis non neque eligendi commodi, quisquam veniam, voluptates alias voluptatibus, pariatur a culpa sed vel omnis obcaecati dicta excepturi magni earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis non neque eligendi commodi, quisquam veniam, voluptates alias voluptatibus, pariatur a culpa sed vel omnis obcaecati dicta excepturi magni earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis non neque eligendi commodi, quisquam veniam, voluptates alias voluptatibus, pariatur a culpa sed vel omnis obcaecati dicta excepturi magni earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis non neque eligendi commodi, quisquam veniam, voluptates alias voluptatibus, pariatur a culpa sed vel omnis obcaecati dicta excepturi magni earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis non neque eligendi commodi, quisquam veniam, voluptates alias voluptatibus, pariatur a culpa sed vel omnis obcaecati dicta excepturi magni earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis non neque eligendi commodi, quisquam veniam, voluptates alias voluptatibus, pariatur a culpa sed vel omnis obcaecati dicta excepturi magni earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis non neque eligendi commodi, quisquam veniam, voluptates alias voluptatibus, pariatur a culpa sed vel omnis obcaecati dicta excepturi magni earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis non neque eligendi commodi, quisquam veniam, voluptates alias voluptatibus, pariatur a culpa sed vel omnis obcaecati dicta excepturi magni earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis non neque eligendi commodi, quisquam veniam, voluptates alias voluptatibus, pariatur a culpa sed vel omnis obcaecati dicta excepturi magni earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis non neque eligendi commodi, quisquam veniam, voluptates alias voluptatibus, pariatur a culpa sed vel omnis obcaecati dicta excepturi magni earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis non neque eligendi commodi, quisquam veniam, voluptates alias voluptatibus, pariatur a culpa sed vel omnis obcaecati dicta excepturi magni earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis non neque eligendi commodi, quisquam veniam, voluptates alias voluptatibus, pariatur a culpa sed vel omnis obcaecati dicta excepturi magni earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis non neque eligendi commodi, quisquam veniam, voluptates alias voluptatibus, pariatur a culpa sed vel omnis obcaecati dicta excepturi magni earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis non neque eligendi commodi, quisquam veniam, voluptates alias voluptatibus, pariatur a culpa sed vel omnis obcaecati dicta excepturi magni earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis non neque eligendi commodi, quisquam veniam, voluptates alias voluptatibus, pariatur a culpa sed vel omnis obcaecati dicta excepturi magni earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis non neque eligendi commodi, quisquam veniam, voluptates alias voluptatibus, pariatur a culpa sed vel omnis obcaecati dicta excepturi magni earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis non neque eligendi commodi, quisquam veniam, voluptates alias voluptatibus, pariatur a culpa sed vel omnis obcaecati dicta excepturi magni earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis non neque eligendi commodi, quisquam veniam, voluptates alias voluptatibus, pariatur a culpa sed vel omnis obcaecati dicta excepturi magni earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis non neque eligendi commodi, quisquam veniam, voluptates alias voluptatibus, pariatur a culpa sed vel omnis obcaecati dicta excepturi magni earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis non neque eligendi commodi, quisquam veniam, voluptates alias voluptatibus, pariatur a culpa sed vel omnis obcaecati dicta excepturi magni earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis non neque eligendi commodi, quisquam veniam, voluptates alias voluptatibus, pariatur a culpa sed vel omnis obcaecati dicta excepturi magni earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis non neque eligendi commodi, quisquam veniam, voluptates alias voluptatibus, pariatur a culpa sed vel omnis obcaecati dicta excepturi magni earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis non neque eligendi commodi, quisquam veniam, voluptates alias voluptatibus, pariatur a culpa sed vel omnis obcaecati dicta excepturi magni earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis non neque eligendi commodi, quisquam veniam, voluptates alias voluptatibus, pariatur a culpa sed vel omnis obcaecati dicta excepturi magni earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis non neque eligendi commodi, quisquam veniam, voluptates alias voluptatibus, pariatur a culpa sed vel omnis obcaecati dicta excepturi magni earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corporis non neque eligendi commodi, quisquam veniam, voluptates alias voluptatibus, pariatur a culpa sed vel omnis obcaecati dicta excepturi magni earum.
            
            </p>
            <p>
                <a href="/posts" data-link>View recently posted posts.</a>
            </p>
        `;
  }
}
