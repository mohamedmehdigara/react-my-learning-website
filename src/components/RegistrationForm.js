import React from 'react';

const RegistrationForm = () => {
  // يمكنك استخدام حالة React لإدارة الحقول في النموذج
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [nationalID, setNationalID] = React.useState('');

  // دالة لإرسال رمز التحقق
  const sendVerificationCode = () => {
    // قم بتنفيذ إرسال رمز التحقق عبر رقم الهاتف والبريد الإلكتروني
  };

  return (
    <div>
      <h2>التسجيل</h2>
      <form>
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="رقم الهاتف" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="البريد الإلكتروني" />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="الاسم" />
        <input type="text" value={nationalID} onChange={(e) => setNationalID(e.target.value)} placeholder="رقم البطاقة القومية" />
        <button type="button" onClick={sendVerificationCode}>إرسال رمز التحقق</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
