import { test, expect } from 'vitest';
import { emailSchema } from '../../validation/form.schema';

test('should valid email schema', async () => {
  const testObject = { email: 'some@email.com' };
  await expect(emailSchema.validateAt('email', testObject)).resolves.toBe(
    testObject.email
  );
});

test('should throw if email schema is not valid', async () => {
  const testObject = { field: 'some@email.com' };
  await expect(emailSchema.validateAt('email', testObject)).rejects.toThrow();
});
