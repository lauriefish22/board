const SUPABASE_URL = 'https://jmdfixempqwyhkrrtcbj.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptZGZpeGVtcHF3eWhrcnJ0Y2JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ1NzUzOTYsImV4cCI6MTk5MDE1MTM5Nn0.6kedsKVXsFKvx_P4MONEnWJ_b7rHQWInoK8x8eST7_w';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getPosts() {
    const { data } = await client.from('board').select('*');
    console.log(data);
    return data;
}
//export async function signIn(email, password)
//const { data } = await supabase.auth.signInWithPassword({email: email,
//password: password,
//});
//return data;
//}

export async function signIn(email, password) {
    const { data } = await client.auth.signIn({
        email: email,
        password: password,
    });
    return data;
}

export async function signUp(email, password) {
    const { data } = await client.auth.signUp({
        email: email,
        password: password,
    });
    return data;
}

export async function redirectIfLoggedIn() {}

export async function signOut() {
    const response = await client.auth.signOut();

    return response.error;
}

export function renderPosts(post) {
    const postEl = document.createElement('div');
    const postTitleEl = document.createElement('p');
    const postInfoEl = document.createElement('p');

    postInfoEl.textContent = post.post_info;
    postTitleEl.textContent = post.post_title;

    postEl.classList.add('post');
    postTitleEl.classList.add('post_title');
    postInfoEl.classList.add('post_info');

    postEl.append(postTitleEl, postInfoEl);

    return postEl;
}

export async function getUser() {
    const {
        data: { user },
    } = await supabase.auth.getUser();

    return user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}
