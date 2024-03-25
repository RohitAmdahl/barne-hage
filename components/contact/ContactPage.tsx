import schoolFont from "@/utils/fontStyle";

const ContactPage = () => {
  return (
    <div>
      <div className=" text-center">
        <div>
          <h2
            className={`${schoolFont.variable} capitalize text-4xl font-school py-2`}
          >
            Billing Address.
          </h2>
          <p className="p-2">Brennagrennda 12147, 1279 Oslo</p>
          <p className="p-2">Alternative is you can send us an email</p>
          <div>
            <h2
              className={`${schoolFont.variable} capitalize text-4xl font-school py-2`}
            >
              Our Location.
            </h2>
            <p className="p-2">Brennagrennda 1212, 1279 Oslo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
