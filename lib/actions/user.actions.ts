'use server';

export const signIn = ({ email, password }: signInProps) => {
    try {
        return "1";
    } catch (error) {
        console.error('Error signing in:', error);
        throw new Error('Failed to sign in');
    }
}

export const signUp = (userData: SignUpParams) => {
    try {
        return "1"; //User here, but placeholder now...
    } catch (error) {
        console.error('Error signing up:', error);
        throw new Error('Failed to sign up');
    }
}