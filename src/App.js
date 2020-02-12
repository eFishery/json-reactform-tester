import React from 'react';
import logo from './logo.svg';
import JsonToForm from 'json-reactform';
import './App.css';

const model = {
  "Plan Date": {
    "type": "date",
    "format": "dd MMMM yyyy",
    "required": true,
    "disabled": true,
    "defaultValue": new Date('11 July 2020') // or "11 July 2020"
  },
  "Qty": {
    "type": "number",
    "required": true,
    // "disabled": true,
    "placeholder": "Jumlah anu",
    "defaultValue": "10"
  },
  "Harga": {
    "type": "currency",
    "required": true,
    // "disabled": true,
    "placeholder": "Harga anu",
    "defaultValue": "250000"
  },
  "Item Number": {
    "type": "select",
    "required": true,
    // "disabled": true,
    "placeholder": "Pilih item",
    "defaultValue": "2",
    "options": [ //use static json arry to get options
      {
        "value": "1",
        "label": "item 1"
      },
      {
        "value": "2",
        "label": "item 2"
      }
    ],
  },
  "Color": {
    "type": "select",
    "required": true,
    // "disabled": true,
    "placeholder": "Pilih warna",
    "defaultValue": "red",
    "createable": true,
    "onCreateOption": (inputValue) => ({
      value: inputValue.toLowerCase(),
      label: inputValue
    }),
    "options": [ //use static json arry to get options
      {
        "value": "red",
        "label": "Red"
      },
      {
        "value": "yellow",
        "label": "Yellow"
      }
    ],
  },
  "Parts": {
    "type": "checkbox",
    "required": true,
    // "disabled": true,
    "defaultValue": ["checkbox_item_1"],
    "options": [ //use static json arry to get options
      {
        "value": "checkbox_item_1",
        "label": "Checkbox 1"
      },
      {
        "value": "checkbox_item_2",
        "label": "Checkbox 2"
      }
    ],
  },
  "Status": {
    "type": "radio",
    "required": true,
    // "disabled": true,
    "defaultValue": "completed",
    "options": [ //use static json arry to get options
      {
        "value": "completed",
        "label": "Completed"
      },
      {
        "value": "not_completed",
        "label": "Not Completed"
      }
    ],
  },
  "Save": { // button submit
    "type": "submit",
    // "disabled": true,
  }
}

function App() {
  const [open, setOpen] = React.useState(false)
  const handleSubmit = (data) => {
    console.log(data)
  }

  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Json React Form Tester</h1>
        <div className='example-container'>
          <div className='menu'>
            <pre className={open ? 'badge badge-primary mb-0' : 'badge badge-secondary mb-0'} onClick={handleToggle}>Model</pre>
          </div>
          <div className='model-container' style={{
            display: open ? 'block' : 'none'
          }}>
            <small><pre className='text-white'>{JSON.stringify(model, null, 2)}</pre></small>
          </div>
          <div className='form-container'>
            <JsonToForm model={model} onSubmit={handleSubmit} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
