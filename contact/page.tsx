'use client';

import { ChangeEventHandler, useState } from 'react';
import Button from '../components/button';
import Input from '../components/input';

const Page = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleInputChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  const handleClickButton = async () => {
    const { name, email, message } = data;
    if (!name || !email || !message) {
      alert('All fields are required');
    } else {
      console.log('data: ', JSON.stringify(data));
      console.log(name, email, message);
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-type': 'Application/Json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      const datas = await res.json();
      console.log('datas: ', datas);
    }
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyItems: 'center',
          margin: '30px',
          justifyContent: 'center',
        }}>
        <Input
          name="name"
          type="text"
          value={data.name}
          placeHolder="Enter Name"
          onChange={
            handleInputChange as React.ChangeEventHandler<HTMLInputElement>
          }
          style={{ width: '300px', margin: '10px' }}
        />
        <Input
          name="email"
          type="text"
          value={data.email}
          placeHolder="Enter Email"
          onChange={
            handleInputChange as React.ChangeEventHandler<HTMLInputElement>
          }
          style={{ width: '300px', margin: '10px' }}
        />
        <textarea
          name="message"
          value={data.message}
          placeholder="Enter Address"
          onChange={handleInputChange}
          style={{ width: '300px', margin: '10px' }}
        />
        <Button
          name="submit"
          type="submit"
          onClick={() => handleClickButton()}
          text="Submit"
          style={{ width: '300px', margin: '10px' }}
        />
      </div>
    </>
  );
};

export default Page;
