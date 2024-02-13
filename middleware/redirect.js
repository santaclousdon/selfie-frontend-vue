export default function ({ store, redirect }) {
  
  if (store.$auth.$state.loggedIn) return redirect('/auth/dashboard')
  else return redirect('/home')
}
