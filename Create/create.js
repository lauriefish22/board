const createForm = document.querySelector('.create-form');

createForm.addEventListener('submit', async (e) => {
    const formData = new FormData(createForm);

    const topic = formData.get('topic');
    const message = formData.get('message');
    const contact = formData.get('contact');

    const { data, error } = await supabase.from('board').insert([
        {
            topic: topic,
            message: message,
            contact: contact,
        },
    ]);
});
