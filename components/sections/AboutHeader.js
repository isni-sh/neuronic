export default function AboutHeader() {
  return (
    <div className="container">
      <div className="row items-center py-20 xs:screen md:py-48 text-center">
        <div className="col-12">
          <h1 className="text-4xl md:text-5xl text-blue-900" style={{ lineHeight: '3.2rem' }}>
            We’re developers too
          </h1>
          <p className=" mx-auto text-base py-4 lg:w-96 tracking-wide text-blue-800">
            Some short description about the product right here and some information some short
            description about the product right here and some information
          </p>
          <div className="flex justify-center">
            <button
              className="md:w-48 w-36 h-10 rounded-sm  mr-1 text-white text-xs md:text-sm bg-blue-500"
              style={{
                boxShadow: '0px 3px 14px -7px rgba(41, 199, 248, 0.41)',
              }}
            >
              JOIN FOR FREE
            </button>
            <button
              className="md:w-48 w-36 h-10 rounded-sm  bg-white text-xs md:text-sm text-blue-900"
              style={{
                boxShadow: '0px 3px 14px -7px rgba(41, 199, 248, 0.41)',
              }}
            >
              DISCOVER MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
