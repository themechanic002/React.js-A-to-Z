import React from 'react'

const Form = ({ value, setValue, handleSubmit }) => {

  const handleType = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <form className='flex pt-4' onSubmit={handleSubmit}>
        <input className='w-full rounded shadow px-2 py-2'
          type='text'
          name="value"
          placeholder="해야 할 일을 입력하세요."
          value={value}
          onChange={handleType}
        />

        <input className='px-4 rounded shadow bg-blue-400 text-white'
          type='submit'
          value='입력'
        />
      </form>
    </div>
  )
}

export default Form