import { ButtonSubmit } from './CustomButton';

export default function ComponentForm (props) {
  const { inputValue, handleChange, postData, disabled } = props;
  return (
    <form className="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <div>
        <div className="relative">
          <label className="font-bold pl-4">Component Name:</label>
          <input
            name="component_name"
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter Component Name"
            value={inputValue.component_name}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <div className="relative">
          <label className="font-bold pl-4">Coordinate:</label>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <input
                name="coordinate_x"
                type='number'
                className="rounded-lg border-gray-200 p-4 pl-8 text-sm shadow-sm"
                placeholder="Enter Coordinate X"
                onChange={handleChange}
              />
              <span className="absolute inset-y-0 start-0 grid place-content-center px-4">
                    X:
              </span>
            </div>

            <div className="relative">
              <input
                name="coordinate_y"
                type='number'
                className="rounded-lg border-gray-200 p-4 pl-8 text-sm shadow-sm"
                placeholder="Enter Coordinate Y"
                onChange={handleChange}
              />
              <span className="absolute inset-y-0 start-0 grid place-content-center px-4">
                    Y:
              </span>
            </div>
          </div>

        </div>
      </div>

      <div>
        <div className="relative">
          <label className="font-bold pl-4">Orientation:</label>
          <input
            name="orientation"
            type="number"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter Orientation"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex justify-center">
        <ButtonSubmit
          onPress={postData}
          title='Add Data'
          disabled={disabled}
        />
      </div>
    </form>
  );
}
