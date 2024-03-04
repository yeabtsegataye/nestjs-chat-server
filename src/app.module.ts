import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { NotificationGateway } from './socket/socket.getway';
import { User } from './user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationModule } from './notification/notification.module';
import { Notification } from './notification/entities/notification.entity';
import { Chat } from './chat/entities/chat.entity';
import { Message } from './message/entities/message.entity';
import { ChatModule } from './chat/chat.module';
import { MessageModule } from './message/message.module';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'chat-tatitaye0-03ac.a.aivencloud.com',
    port: 26637,
    username: 'avnadmin',
    password: 'AVNS_6dd_jZ7SXQmYjqGhqAX',
    database: 'defaultdb',
    entities: [User, Notification, Chat, Message],
    synchronize: true,
  }), UserModule, NotificationModule, ChatModule, MessageModule],
  controllers: [],
  providers: [NotificationGateway],
})
export class AppModule {}
