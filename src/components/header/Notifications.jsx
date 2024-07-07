/* eslint-disable react/prop-types */
const Notifications = ({ notifications, showNotifications }) => {
  return (
    <div
      className={`${
        showNotifications
          ? ` opacity-100`
          : ` opacity-0`
      } absolute right-7 md:right-0 top-16 -z-50 transition-all bg-white  duration-150 rounded-xl`}
    >
      <div className=" w-[400px] max-h-[290px] overflow-y-scroll scrollbar  rounded-xl border ">
        {notifications.length !== 0 ? (
          notifications.map((item, index) => (
            <div
              key={index}
              className="bg-white border-t border-b text-black font-semibold rounded-sm px-4 py-6 hover:bg-slate-100"
            >
              {item}
            </div>
          ))
        ) : (
          <div className="bg-white text-center text-black font-bold rounded p-2 my-2">
            No notifications
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
