const SUPABASE_URL = 'https://jmdfixempqwyhkrrtcbj.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptZGZpeGVtcHF3eWhrcnJ0Y2JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ1NzUzOTYsImV4cCI6MTk5MDE1MTM5Nn0.6kedsKVXsFKvx_P4MONEnWJ_b7rHQWInoK8x8eST7_w';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getPosts() {
    const { data, error } = await client.from('board').select('*');
    console.log(data);
    if (error) console.error(error);

    return data;
}

export async function signIn(email, password) {
    const { data } = await client.auth.signIn({
        email: email,
        password: password,
    });
}

export async function signUp(email, password) {
    const { data } = await client.auth.signUp({
        email: email,
        password: password,
    });
}

export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('/auth');
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

    postInfoEl.textContent = post.info;
    postTitleEl.textContent = post.title;
    postEl.append('postTitle', 'postInfo');

    postEl.classList.add();
    postTitleEl.classList.add;
    postInfoEl.classList.add;
    postEl.textContent = '';
}
