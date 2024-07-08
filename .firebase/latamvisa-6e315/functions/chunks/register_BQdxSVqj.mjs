import { getAuth } from 'firebase-admin/auth';
import { a as app } from './server_1hFA-0b5.mjs';

const POST = async ({ request, redirect }) => {
  const auth = getAuth(app);
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const name = formData.get("name")?.toString();
  console.log("NO SE QUE ESTA PASANDO");
  console.log(email);
  if (!email || !password || !name) {
    return new Response(
      `Missing form data CUlo2323 ${email} ${password} ${name}`,
      { status: 400 }
    );
  }
  try {
    await auth.createUser({
      email,
      password,
      displayName: name
    });
  } catch (error) {
    return new Response(
      "Something went wrong",
      { status: 400 }
    );
  }
  return redirect("/signin");
};

export { POST };
