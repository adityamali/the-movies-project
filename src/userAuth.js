export async function clientLogin() {
    let { data, error } = await supabase.auth.signInWithPassword({
        email: 'someone@email.com',
        password: 'vBafapqaWlMeZliibkdq'
    })
}

