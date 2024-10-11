import { useState, FormEvent, ChangeEvent } from "react";
import { Input, Spacer } from "@nextui-org/react";
import Image from "next/image";
import { apiRoutes } from "@/app/api/config";
import { User, UserPhoneType } from "@/entities/user/user";
import { setAuthCookies } from "@/lib/helpers/headers";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/slices/userSlice";
import { closePanel } from "@/store/slices/panelSlice";

const PhoneInput = ({
  value,
  onChange,
  placeholder,
  iconSrc,
  altText,
  isDisabled,
}: {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  iconSrc: string;
  altText: string;
  isDisabled: boolean;
}) => (
  <Input
    type="text"
    value={value}
    onChange={onChange}
    variant="bordered"
    placeholder={placeholder}
    aria-label="Phone"
    isDisabled={isDisabled}
    startContent={
      <Image
        src={iconSrc}
        alt={altText}
        width={24}
        height={24}
        className="h-full object-contain object-center"
      />
    }
  />
);

export function RegistrationForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userPhones, setUserPhones] = useState({
    telegram: "",
    whatsapp: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const dispatch = useDispatch();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password || (!userPhones.telegram && !userPhones.whatsapp)) {
      setErrors({
        form: "Необходимо ввести email, пароль и один номер телефона",
      });
      return;
    }

    try {
      let user_phone = userPhones.telegram;
      let user_phone_type = "telegram";
      if (userPhones.whatsapp) {
        user_phone = userPhones.whatsapp;
        user_phone_type = "whatsapp";
      }
      const response = await fetch(
        `${apiRoutes.baseUrl}/${apiRoutes.auth}/${apiRoutes.register}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            user_email: email,
            password,
            user_phone,
            user_name: "!!!",
            role: "customer",
            user_phone_type,
            terms_accepted: 1,
          }),
        },
      );
      if (!response.ok) {
        throw new Error("Ошибка при регистрации");
      }
      const respData = await response.json();
      setAuthCookies(respData.token);
      dispatch(setUser(respData.user as User));
      dispatch(closePanel());
      setErrors({});
    } catch (error: any) {
      setErrors({ form: error.message });
    }
  };

  const handlePhoneChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: UserPhoneType,
  ) => {
    setUserPhones({ ...userPhones, [type]: e.target.value });
  };

  return (
    <div className="w-full max-w-lg p-3 ">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 mb-1">
          <label className="text-small text-textColor">
            Номер телефона (На выбор)
          </label>
          <PhoneInput
            value={userPhones.telegram}
            onChange={(e) => handlePhoneChange(e, "telegram")}
            placeholder="Telegram"
            iconSrc="/social/telegramm.svg"
            altText="Telegram"
            isDisabled={!!userPhones.whatsapp}
          />
          <PhoneInput
            value={userPhones.whatsapp}
            onChange={(e) => handlePhoneChange(e, "whatsapp")}
            placeholder="WhatsApp"
            iconSrc="/social/watsapp.svg"
            altText="WhatsApp"
            isDisabled={!!userPhones.telegram}
          />
        </div>

        <Input
          type="email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          variant="bordered"
          label="Логин"
          labelPlacement="outside"
          placeholder="Введите Email"
          startContent={
            <Image
              src={"/icons/letter.svg"}
              alt={"Location"}
              width={24}
              height={24}
              className="h-full object-contain object-center"
            />
          }
        />
        <Spacer y={1.5} />
        <Input
          type="password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          variant="bordered"
          label="Пароль"
          labelPlacement="outside"
          placeholder="Введите Пароль"
          startContent={
            <Image
              src={"/icons/key.svg"}
              alt={"Location"}
              width={24}
              height={24}
              className="h-full object-contain object-center"
            />
          }
        />
        <Spacer y={1.5} />
        <button
          className="px-4 py-2 text-white bg-primary rounded-md hover:bg-cyan-400 w-full"
          type="submit"
        >
          Зарегистрироваться
        </button>
      </form>
      {errors.form && (
        <div className="mt-4">
          <span>{errors.form}</span>
        </div>
      )}
    </div>
  );
}
