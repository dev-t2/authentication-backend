import { PickType } from '@nestjs/swagger';

import { User } from './entities/user.entity';

export class ConfirmNicknameDto extends PickType(User, ['nickname'] as const) {}

export class ConfirmPhoneNumberDto extends PickType(User, ['phoneNumber'] as const) {}

export class SignUpDto extends PickType(User, [
  'email',
  'nickname',
  'password',
  'phoneNumber',
  'isServiceTerms',
  'isPrivacyTerms',
  'isMarketingTerms',
] as const) {}
