import toast from "react-hot-toast"

export const errorToast = (msg) => {
      toast.error(msg,{
            position:'top-right'
      })
}