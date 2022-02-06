import { Spinner } from "lib/components";

const Loading = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Spinner size="lg" />
    </div>
  )
}

export default Loading;