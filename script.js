const canSendMessage = self => ({
    sendMessage: () => console.log('send message:', self.message)
});

const checkIsValidPhone = self => ({
    isValid: () => console.log('valid phone:', self.from)
});

const personalEnterprise = (from, message, store) => {
    const self = {
        from,
        message,
        store,
    };

    const personalEnterpriseBehaviors = self => ({
        createCatalog: () => console.log('Catalog has created: ', self.store)
    });

    return Object.assign(self, personalEnterpriseBehaviors(self), canSendMessage(self), checkIsValidPhone(self));
};

const pe1 = personalEnterprise(08956522542,'hei produk baru nih', 'Dicoding Store');
pe1.createCatalog();
pe1.sendMessage();
pe1.isValid();