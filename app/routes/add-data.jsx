export default function addData () {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Add Component</h1>
        </div>

        <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <div className="relative">
              <label className="font-bold pl-4">Component Name:</label>
              <input
                name="component_name"
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Component Name"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <label className="font-bold pl-4">Coordinate:</label>
              <div className="grid-cols-2 gap-4">
                <input
                  name="coordinate_x"
                  type="int"
                  className="rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Coordinate X"
                />
                <input
                  name="coordinate_y"
                  type="int"
                  className="rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Coordinate Y"
                />
              </div>

            </div>
          </div>

          <div>
            <div className="relative">
              <label className="font-bold pl-4">Orientation:</label>
              <input
                name="orientation"
                type="float"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Orientation"
              />
            </div>
          </div>

          <div className="flex justify-center">

            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
                Add Data
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
