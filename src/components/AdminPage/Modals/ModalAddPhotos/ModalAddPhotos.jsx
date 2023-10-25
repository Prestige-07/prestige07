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
  const [after, setAfter] = useState(null);

  const dispatch = useDispatch();

  const handleExitModal = () => {
    props.handleExitModal(true);
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      handleExitModal(true);
    }
  };

  const formik = useFormik({
    initialValues: {
      beforeAlt: '',
      afterAlt: '',
    },
    onSubmit: values => {
      const formData = new FormData();
      formData.append('before', before);
      formData.append('after', after);
      formData.append('beforeAlt', values.beforeAlt);
      formData.append('afterAlt', values.afterAlt);
      dispatch(addPhotosGroup(formData));
      handleExitModal();
    },
  });

  return (
    <ModalLayout
      handleExitModal={handleExitModal}
      handleBackdropClick={handleBackdropClick}
      isOpen={props.isOpen}
    >
      <Title>Додати фото</Title>
      <Form onSubmit={formik.handleSubmit}>
        <Label>
          Фото до
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
        <Input
          type="text"
          id="beforeAlt"
          name="beforeAlt"
          label="Назва зображення"
          value={formik.values.beforeAlt}
          onChange={formik.handleChange}
          variant="outlined"
          size="small"
        />
        <Label>
          Фото після
          <Input
            required
            type="file"
            id="afterPhoto"
            name="afterPhoto"
            value={formik.values.afterPhoto}
            onChange={e => setAfter(e.currentTarget.files[0])}
            variant="outlined"
            size="small"
          />
        </Label>
        <Input
          type="text"
          id="afterAlt"
          name="afterAlt"
          label="Назва зображення"
          value={formik.values.afterAlt}
          onChange={formik.handleChange}
          variant="outlined"
          size="small"
        />

        <MainButton type="submit" color="var(--black-color)" margin={true}>
          Додати
        </MainButton>
      </Form>
    </ModalLayout>
  );
};
