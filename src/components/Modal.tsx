interface ToggleProps {
  item?: string
  setChoice: (value: boolean) => void,
  message: string,
  title: string
}

const Modal = ({ item, setChoice, message, title }: ToggleProps) => {

  const handleOKClick = (choice: boolean) => {
    setChoice(choice)
  }

  return (


    <div className="   bg-zinc-200 bg-opacity-80 fixed inset-0 z-50   ">
      <div className="flex h-screen justify-center items-center ">
        <div className="flex-col justify-center  bg-white py-12 px-24 border-4 border-sky-50 rounded-xl ">
        <div className="flex  text-lg  text-zinc-600   mb-10 justify-center" >{title}</div>
          <div className="flex  text-lg  text-zinc-600   mb-10" >{message} {item}</div>
          <div className="flex space-x-4 items-stretch justify-center">
            <div >
            <button onClick={() => handleOKClick(true)} className="btn">Yes</button>
            </div>
            <div>
            <button onClick={() => handleOKClick(false)} className="btn">No</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Modal