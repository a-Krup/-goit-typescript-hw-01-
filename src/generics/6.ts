type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, "errors">;

function submitForm(data: Params): void {
  console.log("Дані для надсилання:", data);
}

submitForm({
  email: "test@mail.com",
  firstName: "Оля",
  lastName: "Ковальчук",
  phone: "380123456789",
});
