import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error('Error: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables must be defined.');
  process.exit(1);
}

const email = process.argv[2];
const password = process.argv[3];

if (!email || !password) {
  console.log('Usage: node --env-file=.env scripts/create-admin.js <email> <password>');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

async function createAdmin() {
  console.log(`Creating user in Supabase Auth: ${email}...`);

  // 1. Create the user using Supabase Auth Admin API
  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (error) {
    console.error('Error creating user:', error.message);
    process.exit(1);
  }

  const user = data.user;
  if (!user) {
    console.error('Error: Created user is null.');
    process.exit(1);
  }

  console.log(`User created successfully with ID: ${user.id}`);
  console.log('Adding admin role...');

  // 2. Insert role into user_roles table
  const { error: roleError } = await supabase
    .from('user_roles')
    .insert({
      user_id: user.id,
      role: 'admin',
    });

  if (roleError) {
    console.error('Error assigning admin role:', roleError.message);
    
    // Attempt clean up of created auth user
    console.log('Attempting to clean up created user...');
    await supabase.auth.admin.deleteUser(user.id);
    process.exit(1);
  }

  console.log(`\n🎉 Success! User ${email} has been created and granted the 'admin' role.`);
}

createAdmin();
