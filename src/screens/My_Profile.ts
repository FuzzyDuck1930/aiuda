class MyProfile extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    
  
    render() {
      if (this.shadowRoot) {
        
      }
    }
  }
  
  customElements.define("my-profile", MyProfile);
  export default MyProfile;