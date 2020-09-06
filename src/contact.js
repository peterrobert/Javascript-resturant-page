/* eslint-disable  no-undef, no-plusplus, camelcase, guard-for-in, no-restricted-syntax, import/no-cycle, import/prefer-default-export, no-plusplus, max-len */
class Contact {
  static displayContact() {
    const container = document.getElementById('content');

    const details = document.createElement('div');
    details.setAttribute('class', 'home_details');
    details.setAttribute('id', 'contact_details');

    const pageStructure = () => {
      // bootstrap container
      const bootStrapContainer = document.createElement('div');
      bootStrapContainer.setAttribute(
        'class',
        'container form_input_container',
      );

      // title
      const contactTitle = document.createElement('div');
      contactTitle.setAttribute('class', 'title_details');

      const titleH2 = document.createElement('h2');
      titleH2.innerText = 'Contact Us';

      const titleP = document.createElement('p');
      titleP.innerText = 'Swing by for a meal, or leave us a message:';

      //  created the title
      contactTitle.append(titleH2);
      contactTitle.append(titleP);

      bootStrapContainer.append(contactTitle);

      // start creating the form

      const CreateForm = () => {
        //  row container
        const bootStrapRow = document.createElement('div');
        bootStrapRow.setAttribute('class', 'row');
        bootStrapRow.setAttribute('id', 'form_input');

        const column1 = document.createElement('div');
        column1.setAttribute('class', 'column');

        const Img = document.createElement('img');
        Img.setAttribute('src', '../assets/images/7.jpg');
        Img.setAttribute('style', 'width:100%');

        // image column
        column1.append(Img);
        bootStrapRow.append(column1);

        // form column
        const column2 = document.createElement('div');
        column2.setAttribute('class', 'column');

        const Form = document.createElement('form');
        Form.setAttribute('action', '#');

        const FormGenerator = () => {
          // === setting attributes helper function ====
          function setAttributes(el, attrs) {
            for (const key in attrs) {
              el.setAttribute(key, attrs[key]);
            }
          }

          const label1 = document.createElement('label');
          label1.innerText = 'first name';
          setAttributes(label1, {
            for: 'fname',
          });

          const input1 = document.createElement('input');
          setAttributes(input1, {
            type: 'text',
            id: 'fname',
            name: 'firstname',
            placeholder: 'your name ...',
          });

          const label2 = document.createElement('label');
          label2.innerText = 'last name';
          setAttributes(label2, {
            for: 'lname',
          });
          const input2 = document.createElement('input');
          setAttributes(input2, {
            type: 'text',
            id: 'lname',
            name: 'lastname',
            placeholder: 'your last name',
          });

          const label3 = document.createElement('label');
          label3.innerText = 'subject';
          setAttributes(label3, {
            for: 'subject',
          });

          const input3 = document.createElement('textarea');
          setAttributes(input3, {
            type: 'text',
            id: 'subject',
            name: 'subject',
            placeholder: 'subject',
            style: 'height:170px',
          });

          const input4 = document.createElement('input');
          setAttributes(input4, {
            type: 'submit',
            value: 'submit',
          });

          return {
            label1,
            input1,
            label2,
            input2,
            label3,
            input3,
            input4,
          };
        };

        const { ...rest } = FormGenerator();

        const values = Object.values(rest);
        for (const v of values) {
          Form.append(v);
        }

        column2.append(Form);
        bootStrapRow.append(column2);

        return bootStrapRow;
      };

      bootStrapContainer.appendChild(CreateForm());

      return bootStrapContainer;
    };

    details.append(pageStructure());

    container.append(details);
  }
}

export { Contact };
