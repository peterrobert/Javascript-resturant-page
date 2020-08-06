class Contact {
    static displayContact(){
        
        let container = document.getElementById('content');

        let details = document.createElement('div');
        details.setAttribute('class','home_details');
        details.setAttribute('id','contact_details');
       

        let pageStructure = `<div class="container form_input_container">
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

      details.innerHTML = pageStructure;

      container.append(details);
    };

  
};

export{Contact}