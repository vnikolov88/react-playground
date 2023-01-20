import { mdiLoading } from "@mdi/js";
import Icon from "@mdi/react";

const Loading  = () =>{

    return (
        <div className="bg-zinc-200 opacity-80 fixed inset-0 z-50   ">
        <div className="flex h-screen justify-center items-center ">
          <div className="flex-col justify-center">
            <div className="flex space-x-4 items-stretch justify-center">
              <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                <Icon path={mdiLoading} size={1} />
              </svg>
            </div>
            <div className="flex space-x-4 items-stretch justify-center">
              <label>Loading</label>
            </div>
          </div>
        </div>
      </div>
    );
}



export default Loading