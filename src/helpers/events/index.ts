import { EventEmitter } from "events";
import Mailer from '../../services/mail/Mailer';

class Event extends EventEmitter {

    public email(data: any) {
        return Mailer.email(data)
    }

}

export default new Event();