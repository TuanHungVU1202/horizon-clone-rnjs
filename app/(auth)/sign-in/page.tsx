import AuthForm from '@/components/AuthForm'
import { getLoggedInUser } from '@/lib/actions/user.actions';

async function SignIn() {
  const loggedInUser = await getLoggedInUser();
  
  console.log('$$$ Sign INNNNN', loggedInUser);
  
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthForm type='sign-in' />
    </section>
  )
}

export default SignIn