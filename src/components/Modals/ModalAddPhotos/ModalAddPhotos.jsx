import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import { ModalLayout } from '../ModalLayout';
import { Title } from '../Modal.styles';
import { Form, Label, Input } from 'components/Forms/Forms.styled';
import { MainButton } from 'components/Global/Global.styled';

import { addPhotosGroup } from 'redux/gallery/galleryOperations';
import { useState } from 'react';

export const ModalAddPhotos = props => {
  const [before, setBefore] = useState(null);

  const dispatch = useDispatch();

  const handleExitModal = () => {
    props.handleExitModal(true);
  };

  const formik = useFormik({
    initialValues: {
      beforeAlt: '',
    },
    onSubmit: values => {
      const formData = new FormData();
      formData.append('before', before);
      formData.append('beforeAlt', values.beforeAlt);
      dispatch(addPhotosGroup(formData));
      handleExitModal();
    },
  });

  return (
    <ModalLayout handleExitModal={handleExitModal} isOpen={props.isOpen}>
      <Title>Додати фото</Title>
      <Form onSubmit={formik.handleSubmit}>
        <Label>
          Прикріпити фото
          <Input
            required
            type="file"
            id="beforePhoto"
            name="beforePhoto"
            value={formik.values.beforePhoto}
            onChange={e => setBefore(e.currentTarget.files[0])}
            variant="outlined"
            size="small"
          />
        </Label>
        <Label>
          Назва фото
          <Input
            type="text"
            id="beforeAlt"
            name="beforeAlt"
            value={formik.values.beforeAlt}
            onChange={formik.handleChange}
            variant="outlined"
            size="small"
          />
        </Label>
        <MainButton type="submit" color="var(--black-color)" margin={true}>
          Додати
        </MainButton>
      </Form>
    </ModalLayout>
  );
};
