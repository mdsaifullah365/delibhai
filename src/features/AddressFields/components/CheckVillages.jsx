import SelectWard from "./SelectWard";

export default function CheckVillages({
  disabled,
  addressFields,
  selectedAddress,
  handlers,
}) {
  return (
    <div className="mb-1 mt-4">
      <div className="grid grid-cols-[1fr_125px] items-center">
        <label className="font-bold">গ্রাম/স্ট্যাশন</label>
        <SelectWard
          disabled={disabled}
          fields={addressFields?.wards}
          onChange={handlers.handleWardChange}
          defaultValue={selectedAddress?.ward}
        />
      </div>

      <div className="grid grid-cols-[150px_2fr] p-3 shadow-lg md:grid-cols-[200px_2fr]">
        <div className="h-72 overflow-auto">
          {addressFields?.villages
            ?.filter(
              ({ wardId }) =>
                selectedAddress?.ward === "all" ||
                selectedAddress?.ward === wardId,
            )
            .map(({ _id, title }) => (
              <label key={_id} className="my-1 block text-xl">
                <input
                  onChange={handlers.handleVillageCheck}
                  type="checkbox"
                  name="village"
                  checked={selectedAddress.village.includes(_id)}
                  value={_id}
                />{" "}
                {title}
              </label>
            ))}
        </div>
        <div className="flex h-72 flex-col flex-wrap gap-2 overflow-x-auto pl-4">
          {selectedAddress?.village?.map((_id) => (
            <p key={_id} className="bg-gray-50 px-2 py-1">
              {
                addressFields.villages.find((village) => village._id === _id)
                  .title
              }
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}