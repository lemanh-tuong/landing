import React from 'react';
import { SwatchesPicker, ChromePicker, SketchPicker } from 'react-color';
import Form from 'components/Form/Form';

// class PreviewPage extends PureComponent {
//   state: PageProps = {
//     elements: [],
//     pageName: ''
//   };

//   componentDidMount() {
//     readFireBase(this.handleGetData);
//   }

//   handleGetData = (arg: Option) => {
//     this.setState(arg);
//   };
//   render() {
//     console.log(this.state);
//     const { elements } = this.state;
//     return <div className="Preview">
//       {!!elements && elements.map(element => RenderSection(element))}
//     </div>;
//   }
// }

// const PreviewPage = () => {
//   return (
//     <Form
//       fieldsInput={[
//         {
//           name: 'title',
//           type: 'text',
//           defaultValue: 'Title 1',
//           onChange: (e: ChangeEvent<HTMLInputElement>) => console.log(e.target.value),
//           key: '1',
//         },
//         {
//           name: 'title',
//           type: 'text',
//           defaultValue: 'Title 2',
//           onChange: (e: ChangeEvent<HTMLInputElement>) => console.log(e.target.value),
//           key: '2',
//         },
//       ]}
//       renderItemInput={({ name, defaultValue, key, type, onChange }) => <Input key={key} onChange={onChange} label={name} value={defaultValue} type={type} />}
//       fieldsCheckBox={[
//         {
//           checked: true,
//           label: 'Slider',
//           onClick: () => console.log('click'),
//           id: '1'
//         }
//       ]}
//       renderItemCheckBox={({ checked, label, id, onClick }) => <CheckBox key={id} label={label} checked={checked} onClick={onClick} />}
//       fieldsRadio={[
//         {
//           label: 'Align Title',
//           onClick: (result) => console.log(result),
//           data: [
//             {
//               label: 'center',
//               name: 'align'
//             },
//             {
//               label: 'left',
//               name: 'align'
//             },
//             {
//               label: 'right',
//               name: 'align'
//             },
//           ]
//         }
//       ]}
//       renderItemRadio={({ label, data, onClick }) => <Radio onClick={onClick} label={label} data={data} />}
//     />
//   );
// };

const PreviewPage = () => {
  const handleChange = (color: any) => {
    console.log(color);
  }
  return (
    <Form 
        fields={[
        {
          fieldType: 'input',
          fieldName: 'title',
          horizontal: true,
          defaultValue: 'Title'
        },
        {
          fieldType: 'radio',
          fieldName: 'align title',
          data: [
          {
            value: 'center',
            name: 'align title'
          },
          {
            value: 'left',
            name: 'align title'
          },
          {
            value: 'right',
            name: 'align title'
          },
          ],
        },
        {
          fieldType: 'color-picker',
          fieldName: 'title color',
          name: "Color Title",
        }
        ]}
        onChange={(result) => console.log}
      />
  );
};
export default (PreviewPage);
