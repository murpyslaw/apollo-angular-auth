export class User {
    constructor(
        public email: string,
        public username: string,
        public password?: string,
        public repPassword?: string,
        public country?: string,
        public institution?: string,
        public id?: string
    ) {}
}