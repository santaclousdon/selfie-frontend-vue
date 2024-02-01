export default function ({ store, redirect }) {
  if (!store.$auth.$state.loggedIn) return redirect('/no-auth')
  else return redirect('/auth/dashboard')
}
