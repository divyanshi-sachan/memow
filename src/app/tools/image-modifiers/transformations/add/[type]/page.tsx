import TransformationForm from '@/components/tools/TransformationForm';
import { transformationTypes } from '@/constants'
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { SearchParamProps } from '../../../../../../../types';
import { TransformationTypeKey } from '../../../../../../../types';

const AddTransformationTypePage = async ({ params }: SearchParamProps) => {
  const param = await params
  const { userId } = await auth();
  const transformation = transformationTypes[param.type];

  if(!userId) redirect('/sign-in')

  const user = await getUserById(userId);

  return (
    <>
      <section className="mt-10">
        <TransformationForm 
          action="Add"
          userId={user._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  )
}

export default AddTransformationTypePage