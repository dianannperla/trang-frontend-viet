export const Button = ({ label, onClick }) => {
  return `<button onclick="${onClick}">${label}</button>`;
};

export const Form = () => {
  return `<form><input type='text' placeholder='Nhập tên...'/></form>`;
};