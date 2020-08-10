class Contact {
  static displayContact() {

    let container = document.getElementById('content');

    let details = document.createElement('div');
    details.setAttribute('class', 'home_details');
    details.setAttribute('id', 'contact_details');


    let pageStructure = () => {
      // bootstrap container
      let bootStrapContainer = document.createElement('div');
      bootStrapContainer.setAttribute('class', 'container form_input_container');

      // title 
      let contactTitle = document.createElement("div");
      contactTitle.setAttribute('class', 'title_details');

      let titleH2 = document.createElement('h2');
      titleH2.innerText = "Contact Us";

      let titleP = document.createElement('p');
      titleP.innerText = 'Swing by for a meal, or leave us a message:'


      //  created the title
      contactTitle.append(titleH2);
      contactTitle.append(titleP);

      bootStrapContainer.append(contactTitle);

      // start creating the form

      let CreateForm = () => {
        //  row container
        let bootStrapRow = document.createElement('div');
        bootStrapRow.setAttribute('class', 'row');
        bootStrapRow.setAttribute('id', 'form_input');

        let column1 = document.createElement('div');
        column1.setAttribute('class', 'column');

        let Img = document.createElement('img');
        Img.setAttribute('src', '../assets/images/7.jpg');
        Img.setAttribute('style', 'width:100%');

        // image column
        column1.append(Img);
        bootStrapRow.append(column1);

        // form column
        let column2 = document.createElement('div');
        column2.setAttribute('class', 'column');

        let Form = document.createElement('form');
        Form.setAttribute('action','#');

        let FormGenerator = () => {

          // === setting attributes helper function ====
          function setAttributes(el, attrs) {

            for(var key in attrs) {

              el.setAttribute(key, attrs[key]);

            }
          }
      
           
          let label1 = document.createElement('label');
          setAttributes(label1,{'for': 'fname'});

          let input1 = document.createElement('input');
          setAttributes(input1, {"src": "http://example.com/something.jpeg", "height": "100%"});

        console.log(input1);
        }

        Form.append(FormGenerator());


      //  return the Row
        return bootStrapRow;
      }





      bootStrapContainer.appendChild(CreateForm());

      return bootStrapContainer
    }


    `<div class="container form_input_container">
        <div style="text-align:center">
          <h2>Contact Us</h2>
          <p>Swing by for a meal, or leave us a message:</p>
        </div>
        <div class="row" id ="form_input">
          <div class="column">
            <img src="../assets/images/7.jpg" style="width:100%">
          </div>
          <div class="column">
            <form action="#">
              <label for="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name..">
              <label for="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name..">
              <label for="country">Country</label>
              <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
              <label for="subject">Subject</label>
              <textarea id="subject" name="subject" placeholder="Write something.." style="height:170px"></textarea>
              <input type="submit" value="Submit">
            </form>
          </div>
        </div>
      </div>`

    details.append(pageStructure());

    container.append(details);
  }


}

export {
  Contact
}